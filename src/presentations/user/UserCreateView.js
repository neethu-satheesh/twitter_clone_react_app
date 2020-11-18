import { Form, Field } from 'react-final-form'
import { startCase } from 'lodash';

const InputField = ({name, validate}) => {
    console.log('In inputField')
    return (
        <Field name={name} type="text" component="input" placeholder={startCase(name)} validate={validate}>
          {({ input, meta }) => (
            <div>
                <label>{startCase(name)}</label>
                <input {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
    )
}

function UserCreateView({ onSubmit, validate }) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} >
                    <h2>Register</h2>
                    <InputField name="firstName" validate={validate} />
                    <InputField name="lastName" validate={validate}/>
                    <InputField name="handler" validate={validate} />
                    <button type="submit" disabled={submitting}>Submit</button>
                </form>
            )} 
        />
    );
}

export default UserCreateView;