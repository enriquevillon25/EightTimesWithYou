import React, { useState } from "react";
import { CardComponent } from "../../components/cardComponent/CardComponent";
import { DatePicker, Image, message } from "antd";
import { Button, Modal, Space } from "antd";
import HeartOutlined, {
  CalendarOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Link, Text } = Typography;
export const HomeScreen = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const storageEntrity = localStorage.getItem("id");
  const availableCount = 4;
  const [total, setTotal] = useState([
    {
      name: "1",
      active: false,
      title: "Vamos al campo con Drako",
      titleBody: "Paseo de fin de semana con Drako",
      textBody:
        "Vamos a cieneguilla a alquilar un bonito hotel petfriendly uno de estos fines de semana, para divertirnos y relajarnos con drako. Sobre todo comer buenazo",
    },
    {
      name: "2",
      active: false,
      title: "Viaje a Panamá",
      titleBody: "¡Viajemos a Panáma juntos!",
      textBody: (
        <>
          <Text>
            Ya es momento de subir a un avión juntos, viajemos a Panamá es una
            invitación, Vamos a Bocas del Toro una semana y al miami
            latinoamericano unos días! a tener una cena romantica al frente del
            mar y nadar mucho, la pasaremos genial
          </Text>
          <br />
          <br />
          <Text>
            <CalendarOutlined /> Disponibles: 15 de sept a 20 de oct
          </Text>
          <br />

          <Text>
            <CalendarOutlined /> Estadía: 6 a 10 días
          </Text>
          <br />
          <br />
          <Text>
            Info de los vuelos
            <Link href="https://acortar.link/A7jPQ2" target="_blank">
              {" aquí"}
            </Link>
          </Text>
          <br />
          <Text>
            Posibles hoteles 4 estrellas, yo escogeré los hoteles pero estan
            unas alternativas para decidir juntos
            <Link href=" https://acortar.link/X9vOtp" target="_blank">
              {" aquí"}
            </Link>
          </Text>
          <br />
          <Text>Sería hermoso viajar contigo, invito todo</Text>
        </>
      ),
    },
    {
      name: "3",
      active: false,
      title: "Ir a central",
      titleBody: "Vamos al mejor restaurante del mundo",
      textBody:
        "Te invito al mejor restaurante del mundo, por suerte Hernán me puede conseguir reservas, pero tengo que avisarle con unas semanas de anticipación. Coordinamos la fecha disponible y vamos!",
    },
    {
      name: "4",
      active: false,
      title: "Viaje a Cuzco",
      titleBody: "Viajemos a una maravilla del mundo",
      textBody:
        "Hay que turistear buenazo en Cuzco! Vamos a valle sagrado haremos parapente con todo, Después a aguas calientes a turistear y quedarnos en un hotel lindo y visitar machu picchu ",
    },
    {
      name: "5",
      active: false,
      title: "Viaje costa con Drako",
      titleBody: "Recorrer la costa con drako",
      textBody:
        "Recorramos la costa sur con Drako conocer chincha, pisco, paracas, quedarnos en hoteles con drako y tomarnos muchas fotos conocer nuevos lugares con nuestro hijo",
    },
    {
      name: "6",
      active: false,
      title: "Hotel 5 estrellas Lima",
      titleBody: "Una noche en el Iberostar",
      textBody: (
        <>
          <span>
            Tiene una vista hermosa! podemos estar una noche pasandola rico y
            tomar un rico desayuno. Hay que hacerlo la otra semana!,
          </span>
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Image
              width={200}
              src="https://apiimg.iberostar.com/uploads/image/65711/image.jpeg"
            />
          </div>
        </>
      ),
    },
    {
      name: "7",
      active: false,
      title: "Cena en Cala",
      titleBody: "Este domingo nuestra cena en Cala",
      textBody: (
        <>
          <span>Este domingo nuestra cena en Cala tomemos muchos drinks!</span>
        </>
      ),
    },
    {
      name: "8",
      active: false,
      title: "Tequila frente al mar",
      titleBody: "Brindemos viendo el mar",
      textBody: (
        <>
          <span>
            te preparo las mejores margaritas! he visto tiktoks se ve fácil y
            los tequilas que traje son top!
          </span>
        </>
      ),
    },
  ]);
  const [entrity, setEntrity] = useState<any>(
    storageEntrity !== null ? JSON.parse(storageEntrity) : []
  );
  const [show, setShow] = useState(true);

  const takeSpin = (value: any) => {
    const arrnew = total.map((response: any) => {
      return {
        ...response,
        active: response.name === value ? !response.active : response.active,
      };
    });
    setTotal(arrnew);
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content:
        "No puedes visualizar mas cartas. Pónganse en coontacto con el administrador",
      className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };

  const testing = (value: any) => {
    const storedValue = localStorage.getItem("id");
    console.log("entirty", entrity);
    if (
      entrity.some((response: any) => response === value) ||
      entrity.length < availableCount
    ) {
      takeSpin(value);
    }
    if (entrity.some((response: any) => response === value)) return;
    if (
      storedValue !== null &&
      JSON.parse(storedValue).length === 4 &&
      entrity.length === availableCount
    ) {
      success();
      return;
    }
    setEntrity((oldEntrity: any) => {
      const newEntrity = [...oldEntrity, value];
      localStorage.setItem("id", JSON.stringify(newEntrity));
      return newEntrity;
    });
  };

  return (
    <>
      {contextHolder}
      <div>
        <Title level={2}>
          Ocho veces contigo <HeartTwoTone twoToneColor="#eb2f96" />
        </Title>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "47% 47%",
            gap: "20px",
            gridAutoRows: "200px",
            margin: "20px",
            justifyItems: "center",
          }}
        >
          {total.map((value: any, index: number) => (
            <>
              <CardComponent
                number={value.name}
                key={index}
                test={value.active}
                entrity={entrity}
                setEntrity={setEntrity}
                onClick={() => testing(value.name)}
                title={value.title}
                titleBody={value.titleBody}
                textBody={value.textBody}
              />
            </>
          ))}
        </div>
      </div>
      <Modal
        title={`Puedes dar click a ${availableCount - entrity.length} cartas`}
        open={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
        style={{ marginTop: "25vh" }}
      >
        {availableCount - entrity.length === 0
          ? "Contacta con el administrador"
          : "!Escoge Bien!"}
      </Modal>
    </>
  );
};
