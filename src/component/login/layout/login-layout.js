import React from "react";
import {View,Button} from "react-native";
import {Field,reduxForm} from "redux-form"
import {CustomTextbox} from "../../../global/commoncomponent/customTextField"
const LoginLayout = ()=>{
    return (
        <View>
            <Field type="numeric" label="Mobile No" name="mobileno" component={CustomTextbox}/>
            <Field type="default" label="Password" name="password" passwordField={true} component={CustomTextbox}/>
            <Button title="Login" onPress={}/>
        </View>
    )
}

export default LoginLayout