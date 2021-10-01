import { AuthFormStyled } from "./AuthFormStyled";
import { authOperations } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import SubmitButton from "../../common/submitButton/SubmitButton";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validationSchema";
import { toast } from "react-toastify";

interface IInitialState {
  email: string,
  password: string,
  repeatPassword: string,
}

type TOnHandleSubmit = (cred: IInitialState) => void ;

interface IProps {
  repeatPassword?: boolean
}

const initialState: IInitialState = {
  email: "",
  password: "",
  repeatPassword: "",
};

const AuthForm = ({ repeatPassword = true }:IProps) => {
  const dispatch = useDispatch();

  const onHandleSubmit: TOnHandleSubmit= ({ email, password, repeatPassword }) => {
    if (repeatPassword) {
      if (repeatPassword === password) {
        dispatch(authOperations.register({ email, password }));
      } else {
        toast.error(`Паролі не співпадають, потрібно повторити введеня`);
      }
    } else {
      dispatch(authOperations.logIn({ email, password }));

      toast.success(`Вітаємо!`);
    }
  };

  return (
    <AuthFormStyled>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => onHandleSubmit(values)}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit} className="inputWrapper">
            <Field
              className={`inputForm  ${errors.email ? "errorPassword" : null} `}
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <div className="errors">{errors.email}</div>
            ) : null}

            <Field
              className={`inputForm  ${
                errors.password ? "errorPassword" : null
              } `}
              type="text"
              placeholder="Пароль"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <div className="errors">{errors.password}</div>
            ) : null}
            {repeatPassword && (
              <Field
                className={`inputForm  ${
                  errors.password ? "errorPassword" : null
                } `}
                type="text"
                placeholder="Повторіть пароль"
                name="repeatPassword"
                onChange={handleChange}
                value={values.repeatPassword}
              />
            )}

            <SubmitButton
              nameBtn={`${!repeatPassword ? "Увійти" : "Зареєструватись"}`}
            />
          </Form>
        )}
      </Formik>
    </AuthFormStyled>
  );
};

export default AuthForm;
