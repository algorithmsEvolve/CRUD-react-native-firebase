import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  divider: {
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    marginBottom: 32,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFLS: {
    flex: 1,
  },
  validationText: {
    marginTop: 8,
    marginBottom: 16,
    color: "red",
    alignSelf: "center",
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 16,
    padding: 5,
  },
  button: {
    width: 200,
    marginBottom: 16,
  },
  item: {
    backgroundColor: "grey",
    margin: 5,
    width: 90,
    padding: 8,
    color: "white",
  },
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: "center",
  },
  //FoodFormScreen
  containerFFS: {
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 32,
  },
  formInputFFS: {
    width: "75%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    padding: 8,
  },
  rowFFS: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  longFormInput: {
    width: "100%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    padding: 8,
  },
  headerText: {
    fontSize: 32,
    margin: 32,
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 32,
  },
  ingredientText: {
    fontStyle: "italic",
    fontSize: 18,
    marginBottom: 32,
  },
  ingredientItemText: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  containerFD: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: "grey",
  },
});
