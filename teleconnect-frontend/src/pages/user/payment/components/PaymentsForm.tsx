import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { addPackageToUser } from "../api/PaymentForm";

/**
 * Esquema de validação usando Zod
 */
const paymentSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Deve conter 16 dígitos"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido (MM/AA)"),
  cvv: z
    .string()
    .regex(/^\d{3}$/, "Deve conter 3 dígitos"),
  cardHolder: z
    .string()
    .min(3, "Nome inválido")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Apenas letras"),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato inválido (999.999.999-99)"),
  cep: z
    .string()
    .regex(/^\d{8}$/, "Formato inválido (somente números)"),
  numero: z
    .string()
    .min(1, "Número obrigatório"),
});

export const PaymentForm = () => {
  const [endereco, setEndereco] = useState({ rua: "", bairro: "", cidade: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    mode: "onChange",
  });

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Pega o pacote do PaymentPage: "location.state?.packageData"
  const pacoteSelecionado = location.state?.packageData;

  /**
   * Função para buscar CEP e preencher automaticamente rua, bairro e cidade
   */
  const buscarCEP = async (cep: string) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          toast.error("CEP inválido");
          return;
        }
        setEndereco({
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        });
      } catch (error) {
        toast.error("Erro ao buscar CEP");
      }
    }
  };

  /**
   * Submissão do formulário -> adicionar pacote ao usuário
   */
  const onSubmit = async () => {
    if (!pacoteSelecionado) {
      toast.error("Nenhum pacote foi selecionado.");
      return;
    }

    setIsLoading(true);
    try {
      // Chamada para o backend
      const response = await addPackageToUser(pacoteSelecionado._id);
      if (response.success) {
        toast.success("Pagamento aprovado!");
        navigate("/pagamento/confirmado");
      } else {
        toast.error(response.message || "Erro ao processar pagamento.");
      }
    } catch (error) {
      toast.error("Erro ao processar pagamento.");
    }
    setIsLoading(false);
  };

  return (
    <PaymentContainer>
      <Title>Pagamento</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Número do Cartão */}
        <FieldGroup>
          <Label>Número do Cartão</Label>
          <MaskedInput
            mask="9999999999999999"
            {...register("cardNumber")}
            placeholder="**** **** **** ****"
          />
          {errors.cardNumber && (
            <ErrorMessage>{errors.cardNumber?.message as string}</ErrorMessage>
          )}
        </FieldGroup>

        {/* Validade e CVV */}
        <Row>
          <FieldGroup>
            <Label>Validade</Label>
            <MaskedInput
              mask="99/99"
              {...register("expirationDate")}
              placeholder="MM/AA"
            />
            {errors.expirationDate && (
              <ErrorMessage>{errors.expirationDate?.message as string}</ErrorMessage>
            )}
          </FieldGroup>
          <FieldGroup>
            <Label>CVV</Label>
            <MaskedInput mask="999" {...register("cvv")} placeholder="***" />
            {errors.cvv && (
              <ErrorMessage>{errors.cvv?.message as string}</ErrorMessage>
            )}
          </FieldGroup>
        </Row>

        {/* Nome no Cartão */}
        <FieldGroup>
          <Label>Nome do Titular</Label>
          <TextInput
            {...register("cardHolder")}
            placeholder="Nome impresso no cartão"
          />
          {errors.cardHolder && (
            <ErrorMessage>{errors.cardHolder?.message as string}</ErrorMessage>
          )}
        </FieldGroup>

        {/* CPF */}
        <FieldGroup>
          <Label>CPF</Label>
          <MaskedInput
            mask="999.999.999-99"
            {...register("cpf")}
            placeholder="999.999.999-99"
          />
          {errors.cpf && (
            <ErrorMessage>{errors.cpf?.message as string}</ErrorMessage>
          )}
        </FieldGroup>

        {/* CEP */}
        <FieldGroup>
          <Label>CEP</Label>
          <MaskedInput
            mask="99999999"
            {...register("cep")}
            placeholder="00000000"
            onBlur={(e) => buscarCEP(e.target.value.replace(/\D/g, ""))}
          />
          {errors.cep && (
            <ErrorMessage>{errors.cep?.message as string}</ErrorMessage>
          )}
        </FieldGroup>

        {/* Endereço (Rua, Bairro, Cidade) */}
        <FieldGroup>
          <Label>Rua</Label>
          <TextInput value={endereco.rua} disabled />
        </FieldGroup>
        <FieldGroup>
          <Label>Bairro</Label>
          <TextInput value={endereco.bairro} disabled />
        </FieldGroup>
        <FieldGroup>
          <Label>Cidade</Label>
          <TextInput value={endereco.cidade} disabled />
        </FieldGroup>

        {/* Número do Endereço */}
        <FieldGroup>
          <Label>Número</Label>
          <TextInput {...register("numero")} placeholder="Número" />
          {errors.numero && (
            <ErrorMessage>{errors.numero?.message as string}</ErrorMessage>
          )}
        </FieldGroup>

        {/* Botão de Submit */}
        <Button type="submit" disabled={!isValid || isLoading}>
          {isLoading ? "Processando..." : "Finalizar Compra"}
        </Button>
      </Form>
    </PaymentContainer>
  );
};

/* ======= Styled Components ======= */

const PaymentContainer = styled.div`
  max-width: 500px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

const ErrorMessage = styled.span`
  font-size: 0.85rem;
  color: red;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3CBBB4;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #32A09A;
  }
`;

const MaskedInput = styled(InputMask)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3CBBB4;
  }
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3CBBB4;
  }
`;
