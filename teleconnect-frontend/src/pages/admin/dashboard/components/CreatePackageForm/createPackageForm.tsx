import React, { useState } from "react";
import styled from "styled-components";
import { createPackage, CreatePackagePayload } from "./FetchCreatePackage"; // Atualize o caminho

export const CreatePackageForm = () => {
    const [selectedPlan, setSelectedPlan] = useState("");
    const [formData, setFormData] = useState<CreatePackagePayload>({
        is_b2b: true,
        price: 0,
    });

    const handlePlanChange = (plan: string) => {
        setSelectedPlan(plan);
        setFormData((prev) => ({
            ...prev,
            mobile_service: undefined,
            mobile_service_amount: undefined,
            fiber: undefined,
            fiber_amount: undefined,
            streaming_partnership: undefined,
            fixed_phone: undefined,
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: id.includes("amount") || id === "price" ? parseFloat(value) || undefined : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data, response } = await createPackage(formData);
            if (response.ok) {
                alert("Pacote criado com sucesso!");
                setFormData({
                    is_b2b: true,
                    price: 0,
                });
                setSelectedPlan("");
            } else {
                alert(data.message || "Erro ao criar pacote.");
            }
        } catch (error) {
            console.error("Erro na criação do pacote:", error);
            alert("Erro ao criar o pacote.");
        }
    };

    return (
        <FormContainer>
            <Header>
                <h2>Criação de Pacote</h2>
                <p>Escolha um plano e preencha as informações para criar um novo pacote.</p>
            </Header>
            <Form onSubmit={handleSubmit} noValidate>
                <FormGroup>
                    <Label htmlFor="is_b2b">É para Empresas (B2B)?</Label>
                    <Select id="is_b2b" onChange={handleInputChange}>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Escolha o tipo de plano:</Label>
                    <PlanOptions>
                        <PlanOption
                            type="button"
                            onClick={() => handlePlanChange("mobile")}
                            active={selectedPlan === "mobile"}
                        >
                            Serviço Móvel
                        </PlanOption>
                        <PlanOption
                            type="button"
                            onClick={() => handlePlanChange("fiber")}
                            active={selectedPlan === "fiber"}
                        >
                            Fibra
                        </PlanOption>
                        <PlanOption
                            type="button"
                            onClick={() => handlePlanChange("fixed")}
                            active={selectedPlan === "fixed"}
                        >
                            Telefone Fixo
                        </PlanOption>
                    </PlanOptions>
                </FormGroup>

                {selectedPlan === "mobile" && (
                    <>
                        <FormGroup>
                            <Label htmlFor="mobile_service">Tipo de Serviço Móvel</Label>
                            <Select id="mobile_service" onChange={handleInputChange}>
                                <option value="">Selecione</option>
                                <option value="Pré-pago">Pré-pago</option>
                                <option value="Pós-pago">Pós-pago</option>
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="mobile_service_amount">Tamanho do Serviço Móvel (GB)</Label>
                            <Input
                                type="number"
                                id="mobile_service_amount"
                                placeholder="Digite o tamanho (GB)"
                                step="10"
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </>
                )}

                {selectedPlan === "fiber" && (
                    <>
                        <FormGroup>
                            <Label htmlFor="fiber">Tipo de Fibra</Label>
                            <Select id="fiber" onChange={handleInputChange}>
                                <option value="">Selecione</option>
                                <option value="Básico">Básico</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Família">Família</option>
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="fiber_amount">Tamanho do Serviço de Fibra (MB)</Label>
                            <Input
                                type="number"
                                id="fiber_amount"
                                placeholder="Digite o tamanho (MB)"
                                step="10"
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="streaming_partnership">Parceria de Streaming</Label>
                            <Select id="streaming_partnership" onChange={handleInputChange}>
                                <option value="">Selecione</option>
                                <option value="GloboPlay">GloboPlay</option>
                                <option value="Premiere">Premiere</option>
                            </Select>
                        </FormGroup>
                    </>
                )}

                {selectedPlan === "fixed" && (
                    <FormGroup>
                        <Label>Telefone Fixo será incluído neste plano.</Label>
                        <Input
                            type="checkbox"
                            id="fixed_phone"
                            checked={!!formData.fixed_phone}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, fixed_phone: e.target.checked }))
                            }
                        />
                    </FormGroup>
                )}

                <FormGroup>
                    <Label htmlFor="price">Preço Total (R$)</Label>
                    <Input
                        type="number"
                        id="price"
                        placeholder="Digite o preço total (R$)"
                        step="10"
                        required
                        onChange={handleInputChange}
                    />
                </FormGroup>

                <SubmitButton type="submit">Criar Pacote</SubmitButton>
            </Form>
        </FormContainer>
    );
};


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    margin: auto;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 15px;

    h2 {
        font-size: 1.25rem;
        color: #333;
    }

    p {
        font-size: 0.9rem;
        color: #777;
    }
`;

const Form = styled.form`
    width: 100%;
`;

const FormGroup = styled.div`
    margin-bottom: 10px;
    width: 100%;
`;

const Label = styled.label`
    display: block;
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
`;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
`;

const PlanOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

interface PlanOptionProps {
    active: boolean;
}

const PlanOption = styled.button<PlanOptionProps>`
    flex: 1;
    padding: 8px;
    background-color: ${(props) => (props.active ? "#3CBBB4" : "#f9f9f9")};
    color: ${(props) => (props.active ? "#fff" : "#333")};
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #90D5D2;
        color: #fff;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 8px;
    background-color: #3CBBB4;
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #90D5D2;
    }
`;
