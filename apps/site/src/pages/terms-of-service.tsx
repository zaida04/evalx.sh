import Layout from "../components/landing/Layout";
import Container from "../components/legal/Container";
import Heading from "../components/legal/Heading";
import Paragraph from "../components/legal/Paragraph";

export default function TOS() {
  return (
    <Layout>
      <Container>
        <h1 className="my-8">Terms of Service</h1>
        <div className="divider" />
        <Paragraph>
          These Terms of Service ("Terms") govern your use of the Evalx Run-Time
          Function Running Service ("Service"), provided by Yoki Labs
          ("Company"). By accessing or using the Service, you agree to be bound
          by these Terms.
        </Paragraph>
        <Heading>Use of Service</Heading>
        <Paragraph>
          The Service allows you to run and test code in various programming
          languages. In order to use the Service, you must provide us with
          certain information, including but not limited to your email address
          and password. You must ensure that all information provided to us is
          accurate and up-to-date.
        </Paragraph>
        <Heading>Code Submission and Data Collection</Heading>
        <Paragraph>
          When you use the Service to submit code for testing, we collect
          information about the code you submit, including the status and
          outcome of the code, any logs outputted from the code, and other
          related analytics. We may use this information to improve the Service,
          to troubleshoot issues, and to analyze trends.
        </Paragraph>
        <Heading>User Information</Heading>
        <Paragraph>
          We store basic information about our users, including their email
          address and password, and name. If you are on a premium plan, our
          stripe provider will be responsible for storing your payment
          information.
        </Paragraph>
        <Heading>Prohibited Conduct</Heading>
        <Paragraph>
          You agree not to use the Service for any unlawful or fraudulent
          purpose, or in any manner that interferes with the operation of the
          Service. You also agree not to use the Service to submit code that
          contains viruses, worms, or other harmful code.
        </Paragraph>
        <Heading>Ownership and Intellectual Property</Heading>
        <Paragraph>
          You retain ownership of all code submitted to the Service. We retain
          ownership of all data collected through the Service, including any
          related analytics. All intellectual property rights in the Service,
          including any trademarks or copyrights, are owned by Company.
        </Paragraph>
        <Heading>Disclaimer of Warranties</Heading>
        <Paragraph>
          The Service is provided on an "as is" and "as available" basis. We
          make no representations or warranties of any kind, express or implied,
          regarding the Service, including but not limited to any warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement.
        </Paragraph>
        <Heading>Limitation of Liability</Heading>
        <Paragraph>
          To the maximum extent permitted by law, we shall not be liable for any
          indirect, incidental, special, or consequential damages arising out of
          or in connection with the use or inability to use the Service.
        </Paragraph>
        <Heading>Governing Law and Dispute Resolution</Heading>
        <Paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of the state of [State], without regard to its conflict of law
          provisions. Any dispute arising out of or in connection with these
          Terms shall be resolved through binding arbitration in accordance with
          the rules of the American Arbitration Association.
        </Paragraph>
        <Heading>Changes to Terms of Service</Heading>
        <Paragraph>
          We reserve the right to update or modify these Terms of Service at any
          time without prior notice. Your continued use of the Service after any
          such changes constitutes your acceptance of the revised Terms of
          Service.
        </Paragraph>
        <Heading>Termination</Heading>
        <Paragraph>
          We reserve the right to terminate your access to the Service at any
          time, with or without cause, and with or without notice.
        </Paragraph>
        <Paragraph>
          By using the Evalx Run-Time Function Running Service, you agree to
          these Terms of Service. If you do not agree to these Terms of Service,
          you may not use this service.
        </Paragraph>
      </Container>
    </Layout>
  );
}
