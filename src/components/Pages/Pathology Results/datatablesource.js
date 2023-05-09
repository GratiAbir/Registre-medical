export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'DOCTOR', width: 270,
    renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      }, 
    },
    { field: "work", headerName: "RDV", width: 250,},
    { field: "time", headerName: "TIME", width: 200,}
]
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Dr.Snow",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Covid 19 Test",
      time:"2:00PM",
    },
    {
      id: 2,
      username: "Dr.Jamie Lannister",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Heart Test",
      time:"5:00AM",
    },
    {
      id: 3,
      username: "Dr.Lannister",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Sugar Test",
      time:"4:00PM",
    },
    {
      id: 4,
      username: "Dr.Stark",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Covid 19 Test",
      time:"8:00PM",
    },
    {
      id: 5,
      username: "Dr.Targaryen",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Covid 19 Test",
      time:"11:00AM",
    },
    {
      id: 6,
      username: "Dr.Melisandre",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Pregnancy Test",
      time:"3:00PM",
    },
    {
      id: 7,
      username: "Dr.Clifford",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Heart Test",
      time:"10:40AM",
    },
    {
      id: 8,
      username: "Dr.Frances",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Pregnancy Test",
      time:"8:30AM",
    },
    {
      id: 9,
      username: "Dr.Roxie",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      work:"Covid 19 Test",
      time:"2:35PM",
    },
    {
      id: 10,
      username: "Dr.Roxie",
      img: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000", 
      work:"Sugar Test",
      time:"3:30PM",
    },
  ];