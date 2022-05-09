import React from "react";
import {link} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function EditUsers() {
    return(
        <div>
        <Form>
       <FormGroup>
           <Label> Name </Label>
           <Input type ="text" placeholder="Enter Name"></Input>
       </FormGroup>
       <Button type="submit">Edit Name </Button>
       </Form>
        </div>
    )
}
export default EditUsers