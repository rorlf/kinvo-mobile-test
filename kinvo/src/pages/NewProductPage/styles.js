import { StyleSheet } from "react-native";
import metrics from "../../shared/styles/metrics";

const styles = StyleSheet.create({
  container1: {
    flex: 1
  },
  registerScreen: {
    flex: 1,
    justifyContent: 'space-between',

  },
  closeArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: metrics.border,
    borderTopColor: "#DAE0E3",
    borderTopWidth: metrics.border,
    height: metrics.bottomNavigationBarHeight
  },
  closeButton: {
    backgroundColor: "#DAE0E3",
    height: 35,
    width: 35,
    borderRadius: 50,
    marginTop: metrics.spaceX,
    marginBottom: metrics.space2X,
    alignItems: "center",
    justifyContent: "center"
  },
  titleArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: metrics.border,
    height:metrics.bottomNavigationBarHeight
  },
  titleText: {
    color: "#627179",
    fontWeight: "bold"
  },
  closeIcon: {
    color: "white",
    fontSize: 20
  },
  container: {
    borderColor: "#DAE0E3",
    borderWidth: metrics.border,
    marginTop: metrics.spaceX,
    marginBottom: metrics.spaceX,

    marginLeft: metrics.space2X,
    marginRight: metrics.space2X,
    borderRadius: metrics.radius2X
  },
  divider: {
    height: 1,
    backgroundColor: "#DAE0E3",
    width: "90%",
    alignSelf: "center",
    marginBottom: metrics.space15X,
    marginTop: metrics.space15X,
  },
   message: {
    marginLeft: metrics.space15X,
    marginBottom: metrics.space15X,
    fontSize: 11
  },
  titleAndIconAndPlusButtonArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: metrics.space15X

  },
  titleAndIconArea: {
    flex: 1,
    flexDirection: "row",
  },
  iconCard: {
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: metrics.space15X
  },
  plusButton: {
    color: "#DAE0E3",
    fontSize: 30,
    marginRight: metrics.space15X,
    justifyContent: "center"
  },
  cardName: {
    alignSelf: "center",
    marginLeft: metrics.spaceX
  }
});

export default styles;