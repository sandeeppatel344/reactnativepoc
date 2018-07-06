import React from "react";
import {View,Button} from "react-native";
import {Field,reduxForm} from "redux-form";
import {CustomTextbox} from "../../../global/commoncomponent/customTextField";
import {CustomCheckbox} from "../../../global/commoncomponent/customTextField";
import {SubmitForm} from "../functions/submitform";
import {Validate} from "../functions/validation"

const LoginLayout = (props)=>{
      const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <View>
            <Field type="numeric" label="Mobile No" name="mobileno" component={CustomTextbox}/>
            <Field type="default" label="Password" name="password" passwordField={true} component={CustomTextbox}/>
            <Field lable="Keep me login" component={CustomCheckbox}/>
            <Button title="Login" onPress={()=>{handleSubmit(SubmitForm)}}/>
        </View>
    )
}

export default reduxForm({
    form:"loginform",
    Validate
})