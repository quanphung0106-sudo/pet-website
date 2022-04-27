import { Alert } from 'react-bootstrap';

const UserActivation = () => {
  return (
    <Section>
      <PageTitle text="User Activation" />
      <Alert variant='success'>
        You have been succesfuly activated. You can login now!{' '}
        <Link href="http://localhost:3000/login">
          <a>
            Login
          </a>
        </Link>
      </Alert>
    </Section>
  )
}

export default UserActivation;