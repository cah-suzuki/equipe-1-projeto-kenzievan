import { About, BoxInput, CardInput, Container, Content, Times } from "./styles";
import { FiCheck, FiChevronRight } from "react-icons/fi";
import Button from "../button";
import { useForm } from "react-hook-form";

const StudentCard = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const entryTime = () => {
    const now = new Date();
    console.log(now.toLocaleString());
  };

  const departureTime = () => {
    const now = new Date();
    console.log(now.toLocaleString());
  };

  return (
    <Container>
      <About>
        <span>Nome do aluno</span>
        <p>Responsável</p>
        <p>Endereço</p>
        <p>Escola</p>
      </About>
      <Content>
        <Times>
          <section>
            <p>Entrada:</p>
            <span>xx:xx</span>
            <Button onClick={() => entryTime()}>
              <FiCheck />
            </Button>
          </section>
          <section>
            <p>Saída:</p>
            <span>xx:xx</span>
            <Button onClick={() => departureTime()}>
              <FiCheck />
            </Button>
          </section>
        </Times>

        <CardInput>
          <p>Mensagem para o responsável:</p>
          <BoxInput>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("message")}
                placeholder="Digite sua mensagem"
              />
              <Button type="sumbit">
                <FiChevronRight />
              </Button>
            </form>
          </BoxInput>
        </CardInput>
      </Content>
    </Container>
  );
};

export default StudentCard;
