import React, {useContext, useState} from "react";
import { imageContext } from "../../AppRouter";
import Heading from "../atoms/Heading";
import Form from "../Organism/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";

export default function Add() {

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [date, setDate] = useState('');
    const {isAuthenticated} = useAuth0();
    const { setImage } = useContext(imageContext)
    
    function handleOnSubmit(e) {
        setImage({type: 'add', data: {"name":name, "url":url, "info":info, "date":date}})
    }

    return (
        isAuthenticated ? (
        <div>
            <Heading value="Add Image" />
            <Form onSubmit={handleOnSubmit} 
                    data= { [{"label":"URL", "type":"Text", "details":"Enter the URL", "value": url, "setValue": setUrl},
                        {"label":"Name", "type":"Text", "details":"Enter the name", "value":name, "setValue": setName},
                        {"label":"Information", "type":"TextArea", "details":"Information", "value": info, "setValue": setInfo},
                        {"label":"Date", "type":"date", "value": date, "setValue": setDate}] }
                    /> 
            
        </div>
        ) : 
        (
            <div>
                <Heading value="Please Login" />
            </div>
        )
    )
}