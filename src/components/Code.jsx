import { Box, styled } from '@mui/material';
import Editor from './Editor'
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
     display: flex;
     background-color: #060606;
     height: 50vh;
`

const Code = () => {
 
  // Here i am using the values of context so to do so i will use useContext hook and hume DataCOntext se value chaheye
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return(
        <Container>
          <Editor 
            heading="HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
          />
          <Editor
            heading="CSS"
            icon="*"
            color="#0EBEFF"
            value={css}
            onChange={setCss}
          />
          <Editor
            heading="JavaScript"
            icon="()"
            color="#FCD000"
            value={js}
            onChange={setJs}
          />
        </Container>
    )
}

export default Code;

// Code naam ka jo component hai wo hamara middle component hai hum usko reusable banayenge and uske liye hum ek naya component banayenge editor naam se
// Display flex agr aap kisi parent pe laga rhe ho toh wo uske childrens ko ek line mai laga dega
