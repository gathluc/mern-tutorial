import { MyDocument } from '../components/createPdf'
import { PDFViewer } from '@react-pdf/renderer'

// const styles = StyleSheet.create({
//     viewer: {
//         width: window.innerWidth, //the pdf viewer will take up all of the width and height
//         height: window.innerHeight,
//     },
// });


function Pdf (){
    return (
        <div>
            <PDFViewer >
                {MyDocument}
            </PDFViewer>
        </div>
)};

export default Pdf;
