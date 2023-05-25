import Layout from "../components/landing/Layout";
import Container from "../components/legal/Container";
import Heading from "../components/legal/Heading";
import List, { ListItem } from "../components/legal/List";
import Paragraph from "../components/legal/Paragraph";

export default function Privacy() {
  return (
    <Layout>
      <Container>
        <h1 className="my-8">Privacy Policy</h1>
        <div className="divider" />
        <Heading>Introduction</Heading>
        <Paragraph>
          EvalX is a service that runs one-time code for various languages. We
          collect and use data about our users in order to provide and improve
          our service. This privacy policy explains what data we collect, how we
          use it, and with whom we share it.
        </Paragraph>
        <Heading>Data Collection</Heading>
        <Paragraph>
          When you use EvalX, we collect the following data about you:
          <List>
            <ListItem>Your email address</ListItem>
            <ListItem>Your password</ListItem>
            <ListItem>Your name</ListItem>
            <ListItem>Your IP address</ListItem>
            <ListItem>The code you submit to EvalX</ListItem>
            <ListItem>The status and outcome of your code</ListItem>
            <ListItem>The logs outputted from your code</ListItem>
            <ListItem>Any other related analytics</ListItem>
            <ListItem>
              We also collect data about your use of EvalX, such as the pages
              you visit, the links you click, and the features you use.
            </ListItem>
          </List>
          We may share your data with the following third parties: Our payment
          processor, Stripe, if you are on a premium plan. Our hosting provider
          & analytics service, Vercel. We may also share your data with law
          enforcement or other government officials if we are required to do so
          by law.
        </Paragraph>
        <Heading>Data Security</Heading>
        <Paragraph>
          We take steps to protect your data from unauthorized access, use,
          disclosure, alteration, or destruction. These steps include:
          <List>
            <ListItem>
              Using industry-standard security measures, such as firewalls and
              encryption
            </ListItem>
            <ListItem>
              Limiting access to your data to authorized employees
            </ListItem>
            <ListItem>Training our employees on data security</ListItem>
            <ListItem>Data Retention</ListItem>
          </List>
          We will retain your data for as long as you have an account with EvalX
          or as long as we need to retain it to provide our services to you. We
          may also retain your data for a longer period of time if we are
          required to do so by law.
        </Paragraph>
        <Heading>Your Rights</Heading>
        <Paragraph>
          You have the following rights with respect to your data:
          <List>
            <ListItem>The right to access your data</ListItem>
            <ListItem>The right to correct your data</ListItem>
            <ListItem>The right to delete your data</ListItem>
            <ListItem>
              The right to object to the processing of your data
            </ListItem>
            <ListItem>
              The right to restrict the processing of your data
            </ListItem>
            <ListItem>The right to data portability</ListItem>
            <ListItem>The right to withdraw your consent</ListItem>
          </List>
          You can exercise these rights by contacting us at support@evalx.sh
        </Paragraph>
        <Heading>Changes to this Privacy Policy</Heading>
        <Paragraph>
          We may make changes to this privacy policy at any time. We will
          communicate any changes to you by posting the new privacy policy on
          the Site. You are advised to consult this privacy policy regularly for
          any changes.
        </Paragraph>
        <Heading>Contact Us</Heading>
        <Paragraph>
          If you have any questions about this privacy policy, please contact us
          at support@evalx.sh
        </Paragraph>
      </Container>
    </Layout>
  );
}
