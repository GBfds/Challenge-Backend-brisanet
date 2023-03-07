import prismaClient from "../../prisma";

interface ReqAluno{
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
    matricula: string;
}

class CreateAlunoService{
    async execute({nome, telefone, email, cpf, matricula}: ReqAluno){
        const newAluno = await prismaClient.aluno.create({
            data: {
                nome: nome,
                telefone: telefone,
                email: email,
                cpf: cpf,
                matricula: matricula
            }
        }) 

        return newAluno;
    }
}

export {CreateAlunoService}