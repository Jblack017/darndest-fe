// import React, { useState } from "react";
// import {
//   Text,
//   Pressable,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import { useSelector } from "react-redux";
// import KiddoNavCards from "../components/KiddoNavCards";
// import AddCommentModal from "../modals/AddCommentModal";

// export default function KiddoComments() {
//   const kiddos = useSelector(state => state);
//   const kiddo = kiddos.find(kiddo => kiddo.id == route.params.kiddoId);
//   const [modalVisible, setModalVisible] = useState(true);

//   const renderKiddoComments = () => {
//     return kiddo.comments.map(comment => {
//       return <Text key={comment.id}>{comment.content}</Text>;
//     });
//   };
//   return (
//     <SafeAreaView style={styles.mainView}>
//       <SafeAreaView style={styles.kiddosHorizontalList}>
//         <ScrollView horizontal={true}>
//           <KiddoNavCards />
//         </ScrollView>
//       </SafeAreaView>
//       <SafeAreaView style={styles.body}>
//         <Text>{kiddo.name}</Text>
//         {renderKiddoComments()}
//       </SafeAreaView>
//       <SafeAreaView style={styles.navigation}>
//         <Text>
//           <Pressable
//             style={styles.addCommentButton}
//             onPress={() => setModalVisible(!modalVisible)}
//           >
//             <Text>Add Comment</Text>
//           </Pressable>
//         </Text>
//         <AddCommentModal
//           modalVisible={modalVisible}
//           setModalVisible={setModalVisible}
//           kiddo={kiddo}
//         />
//       </SafeAreaView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     height: "100%",
//     width: "100%",
//   },
//   kiddosHorizontalList: {
//     height: "15%",
//     width: "100%",
//     borderWidth: 1,
//   },
//   kiddoNavCards: {
//     flex: 0,
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 5,
//     margin: 10,
//     width: 150,
//     borderWidth: 1,
//   },
//   kiddoName: {
//     color: "red",
//     fontFamily: "kiddo-font",
//     fontSize: 36,
//   },
//   body: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//   },
//   navigation: {
//     height: "10%",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//   },
// });
