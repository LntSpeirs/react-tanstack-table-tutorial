import TablaSimple from "./components/TablaSimple";
import datos from "./MOCK_DATA.json";
import dayjs from "dayjs";

const App = () => {
  const columnas = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "mi id",
    },

    /* {
      header: "Nombre",
      accessorKey: "name",
      footer: "mi nombre",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
      footer: "mi apellido",
    }, */

    /*  {
      header: "Nombre y apellidos",
      accessorFn: (row) => `${row.name} ${row.lastname}`, //accessorfn da datos de toda la fila
    }, */
    {
      header: "Nombres completos",
      columns: [
        {
          header: "Nombre",
          accessorKey: "name",
          footer: "mi nombre",
        },
        {
          header: "Apellido",
          accessorKey: "lastname",
          footer: "mi apellido",
        },
      ],
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "mi email",
    },
    {
      header: "País",
      accessorKey: "country",
      footer: "mi pais",
    },
    {
      header: "Fecha de Nacimiento",
      accessorKey: "dateOfBirth",
      footer: "mi nacimiento",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];
  return (
    <div>
      <TablaSimple datos={datos} columnas={columnas} />
    </div>
  );
};

export default App;
