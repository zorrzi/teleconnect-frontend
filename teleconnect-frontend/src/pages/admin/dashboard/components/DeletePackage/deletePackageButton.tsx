import React, { useState } from "react";
import styled from "styled-components";
import { deletePackage } from "./FetchDeletePackage";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

interface DeletePackageButtonProps {
    packageId: string;
    onPackageDeleted: () => void;
}

export const DeletePackageButton: React.FC<DeletePackageButtonProps> = ({ packageId, onPackageDeleted }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await deletePackage(packageId);
            toast.success("Pacote deletado com sucesso!");
            onPackageDeleted(); // Atualiza a UI
            setIsModalOpen(false);
        } catch (error) {
            toast.error("Erro ao deletar o pacote.");
        }
    };

    return (
        <>
            <TrashIcon onClick={() => setIsModalOpen(true)} title="Deletar pacote" />
            
            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <h2>Tem certeza?</h2>
                        <p>Essa ação não pode ser desfeita.</p>
                        <ButtonGroup>
                            <CancelButton onClick={() => setIsModalOpen(false)}>Cancelar</CancelButton>
                            <ConfirmButton onClick={handleDelete}>Deletar</ConfirmButton>
                        </ButtonGroup>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

const TrashIcon = styled(FaTrash)`
    color: #d32f2f;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #b71c1c;
    }
`;

// 🔲 Estilos do modal
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const ConfirmButton = styled.button`
    background-color: #d32f2f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #b71c1c;
    }
`;

const CancelButton = styled.button`
    background-color: #cccccc;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #aaaaaa;
    }
`;
