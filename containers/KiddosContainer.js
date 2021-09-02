// import React from "react";
// import { SafeAreaView, Alert } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import KiddoCard from "../components/KiddoCard";

// export default function KiddosContainer(props) {
//   const dispatch = useDispatch();
//   const kiddos = useSelector(state => state);

//   const handleDelete = kiddo => {
//     let newKiddos = kiddos.filter(kid => kid.id !== kiddo.id);
//     fetch(`https://darndest-be.herokuapp.com/kids/${kiddo.id}`, {
//       method: "DELETE",
//     })
//       .then(response => {
//         response.status == 202
//           ? Alert.alert(`${kiddo.name} has been vanished.`)
//           : Alert.alert(
//               "Ooops..Something went wrong. Please refresh app to continue"
//             );
//       })
//       .then(dispatch({ type: "DELETE_KIDDO", newKiddos }));
//   };

//   const renderKiddoCards = () => {
//     return kiddos.map(kiddo => {
//       return (
//         <KiddoCard
//           {...props}
//           key={kiddo.id}
//           handleDelete={handleDelete}
//           kiddo={kiddo}
//         />
//       );
//     });
//   };

//   return <SafeAreaView>{renderKiddoCards()}</SafeAreaView>;
// }
