import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery  from "@mui/material/useMediaQuery";
import Header from '../../components/Header';

const initailValue ={
    firstName : " ",
    lastName : "",
    email : "",
    contact : "",
    address1 : "",
    address2 : "",
}
const phoneRegExp = /^((\+[1-9]{1,4}[-]?)|(\([0-9]{2,3}\)[-]?)|([0-9]{2,4})[-]?)*?[0-9]{3,4}[-]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName : yup.string().required("required"),
    lastName : yup.string().required("required"),
    email : yup.string().required("invalid email").required("required"),
    contact : yup.string().matches(phoneRegExp, "phone numbers is not valid").required("required"),
    address1 : yup.string().required("required"),
    address2 : yup.string().required("required"),
});



const Form = () =>{
    const isNonMobile =useMediaQuery("(min-width:600px)");

    const handleFormSubmit =(value) =>{
        console.log(value);
    }
    return (
        <Box m="20px" >
            <Header title="CREATE USER" subtitle="Create new user profile"/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initailValue}
                validationSchema={userSchema}
             
            >

            {({ values, errors, touched , handleblur, handleChange, handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Box display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr)"
                    sx={{
                        "& > div" :{
                            gridColumn: isNonMobile ? undefined : "span 4"
                        },
                        
                    }}>
                        < TextField
                        fullWidth
                        varient = "filled"
                        type="text"
                        label="FirstName"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        
                        sx={{gridColumn : "span 2", mb:"20px"}}
                        />

                        < TextField
                        fullWidth
                        varient = "filled"
                        type="text"
                        label="LastName"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{gridColumn : "span 2" , mb:"20px"}}
                        />

                        < TextField
                        fullWidth
                        variant = "filled"
                        type="text"
                        label="Email"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{gridColumn : "span 4" , mb:"20px"}}
                        />

                        < TextField
                        fullWidth
                        variant = "filled"
                        type="text"
                        label="Contact"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.contact}
                        name="contact"
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{gridColumn : "span 4", mb:"20px"}}
                        />
                        
                        < TextField
                        fullWidth
                        varient = "filled"
                        type="text"
                        label="Address1"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.address1}
                        name="address1"
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{gridColumn : "span 4" , mb:"20px"}}
                        />
                        
                        < TextField
                        fullWidth
                        arient = "filled"
                        type="text"
                        label="Address2"
                        onBlur={handleblur}
                        onChange={handleChange}
                        value={values.address2}
                        name="address2"
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{gridColumn : "span 4 " , mb:"20px"}}
                        />
                    </Box>

                    <Box display="flex"
                    justifyContent="end"
                    mt="20px"
                    >
                        <Button type="submit" color="secondary" variant="contained">
                            Create new user
                        </Button>
                    </Box>
                </form>
            )}
            </Formik>
        </Box>
    )
} 
export default Form;