import { useState  } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;

`
const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = ( editor, data, value ) => {
         onChange(value);
    }

    return(
        <Container style={ open ? null : { flexGrow: 0}}>
            <Header>
                <Heading>
                    <Box 
                    component = "span"
                    style={{ 
                        background: color,
                        height: 20,
                        width: 20,
                        display: "flex",
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: "#000",
                      }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize="small"
                    style={{ alignSelf: 'center' }}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                className="controlled-editor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'materail',
                    lineNumbers: true
                }}
            />
        </Container>
    )
}

export default Editor;

// In material UI <div> tag replacment is Box
// Editor yani Box here k 2 parts hai one is the upper half where HTML is written and second is the lower half where you will write your code
// Upper wala hissa bhi 2 parts mai divided hai
// React code mirror give us a editor which can detect the HTML CSS JavaScript code
// npm install react-codemirror2 --legacy-peer-deps ye khud apne se jo dependencies issue aari thi usko resolve kr deta hai or you can also write --force
// Controlled and Uncontrolled component aap laga skte ho form component k sath
// Controlled components are those whose value is controlled by react
// Uncontrolled components are those whose value is controlled by the form (Value prop ko form controlled krta hai)
// Values ko aap store kr skte ho usestate k ander but here i have to use them globally so i will use contextAPI here