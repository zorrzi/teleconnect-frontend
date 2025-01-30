import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useState } from "react";
import InputMask from "react-input-mask";

// 🔹 Esquema de validação com Zod
const paymentSchema = z.object({
    cardNumber: z.string().min(16, "Número inválido").max(16, "Número inválido").regex(/^\d{16}$/, "Deve conter 16 dígitos"),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido (MM/AA)"),
    cvv: z.string().min(3, "CVV inválido").max(3, "CVV inválido").regex(/^\d{3}$/, "Apenas 3 dígitos"),
    cardHolder: z.string().min(3, "Nome inválido").regex(/^[A-Za-zÀ-ÿ\s]+$/, "Apenas letras"),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato inválido (999.999.999-99)"),
});

export const PaymentForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(paymentSchema),
        mode: "onChange",
    });

    const onSubmit = (data: any) => {
        setIsLoading(true);
        setTimeout(() => {
            toast.success("Pagamento aprovado!");
            setIsLoading(false);
        }, 2000);
    };

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    };

    return (
        <PaymentContainer>
            <Title>Pagamento</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Label>Número do Cartão</Label>
                    <Input mask="9999 9999 9999 9999" {...register("cardNumber")} placeholder="**** **** **** ****" />
                    {errors.cardNumber && <ErrorMessage>{errors.cardNumber?.message as string}</ErrorMessage>}
                </FieldGroup>

                <Row>
                    <FieldGroup>
                        <Label>Validade</Label>
                        <Input mask="99/99" {...register("expirationDate")} placeholder="MM/AA" />
                        {errors.expirationDate && <ErrorMessage>{errors.expirationDate?.message as string}</ErrorMessage>}
                    </FieldGroup>
                    <FieldGroup>
                        <Label>CVV</Label>
                        <Input mask="999" {...register("cvv")} placeholder="***" />
                        {errors.cvv && <ErrorMessage>{errors.cvv?.message as string}</ErrorMessage>}
                    </FieldGroup>
                </Row>

                <FieldGroup>
                    <Label>Nome do Titular</Label>
                    <StyledInput  className='Teste' type='text' {...register("cardHolder")} placeholder="Nome do Titular" onInput={handleNameInput}/>
                    {errors.cardHolder && <ErrorMessage>{errors.cardHolder?.message as string}</ErrorMessage>}
                </FieldGroup>

                <FieldGroup>
                    <Label>CPF</Label>
                    <Input mask="999.999.999-99" {...register("cpf")} placeholder="999.999.999-99" />
                    {errors.cpf && <ErrorMessage>{errors.cpf?.message as string}</ErrorMessage>}
                </FieldGroup>

                <Button type="submit" disabled={!isValid || isLoading}>
                    {isLoading ? "Processando..." : "Finalizar Compra"}
                </Button>
            </Form>
        </PaymentContainer>
    );
};

/* ======= Styled Components ======= */
const Input = styled(InputMask)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border-color: #3CBBB4;
    }
`;

const StyledInput  = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border-color: #3CBBB4;
    }
`;

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
