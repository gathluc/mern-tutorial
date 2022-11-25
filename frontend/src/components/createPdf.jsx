import {Document,Page,Text,View,StyleSheet,PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#000",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});
// const data = {
//     title: "My Title",
//     description: "My Description",
// }

// Create Document Component
function BasicDocument({data}) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{data?.name}</Text>
          </View>
          <View style={styles.section}>
            <Text>{data?.email}</Text>
          </View>
          <View style={styles.section}>
            <Text>{data?.description}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;