import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/hooks/useRedux';
import { login } from 'src/redux/authSlice';
import { AuthService } from 'src/service/authService';
import * as yup from 'yup';

export interface PageLoginProps {
  className?: string;
}

type Props = {
  className: string;
};

const yupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = ({ className = '' }: Props) => {
  const [formError, setFormError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = (data: any) => {
    setLoading(true);
    AuthService.login(data.email, data.password)
      .then((res) => {
        console.log(res);
        dispatch(login(res));
      })
      .catch((error) => setFormError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id='PageLogin'>
      <Helmet>
        <title>Login || Panee Tourist</title>
      </Helmet>
      <div className='container mb-24 lg:mb-32'>
        <h2 className='my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 md:text-5xl md:leading-[115%]'>
          Login
        </h2>
        <div className='mx-auto max-w-md space-y-6'>
          {/* FORM */}
          <form className='grid grid-cols-1 gap-6' onSubmit={handleSubmit(onSubmit)}>
            {formError && <FormError>{formError}</FormError>}
            <label className='block'>
              <span className='text-neutral-800 dark:text-neutral-200'>Email address</span>
              <Input
                placeholder='example@example.com'
                className='mt-1'
                {...register('email')}
                error={errors.email?.message}
              />
            </label>
            <label className='block'>
              <span className='flex items-center justify-between text-neutral-800 dark:text-neutral-200'>
                Password
                {/* <Link to='/forgot-pass' className='text-sm underline'>
                  Forgot password?
                </Link> */}
              </span>
              <Input
                type='password'
                className='mt-1'
                {...register('password')}
                error={errors.password?.message}
              />
            </label>
            <ButtonPrimary loading={loading} type='submit'>
              Continue
            </ButtonPrimary>
          </form>

          {/* ==== */}
          {/* <span className='block text-center text-neutral-700 dark:text-neutral-300'>
            New user?{' '}
            <Link to='/signup' className='text-sm underline'>
              Create an account
            </Link>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
