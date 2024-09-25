import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const KoalaWelcomeEmail = ({
  userFirstname,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Partnering with Get Funds</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://www.getfunds.co.za/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75`}
          width="170"
          height="50"
          alt="getfunds"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thank you for your interest in becoming a getfunds affiliate! We are
          excited about the potential for a strong partnership and believe that
          getfunds can be a valuable addition to your service portfolio,
          allowing you to offer your clients comprehensive financial solutions.
        </Text>
        <Text style={paragraph}>
          We&lsquo;re deeply integrated with our network of funding partners. This
          allows us to offer fast and easy access to working capital for SMEs.
          With your help, we can connect even more businesses with the financial
          solutions they need to thrive.
        </Text>
        <Text style={paragraph}>
          We have attached a brochure that outlines the benefits of our Affiliate
          Program in more detail including information on our commission
          structure.
        </Text>
        <Text style={paragraph}>
          1. Are you currently on your own or do you own an organization? <br />
          2. What products or services do you already offer? <br />
          3. What industry or vertical do you work in?
        </Text>

        <Section style={btnContainer}>
          <Button
            style={button}
            href="https://drive.google.com/file/d/1DFbZgcl7UrHp6NPbFROvaq9Ig5Rs8_xN/view?usp=drive_link"
          >
            Download Our Brochure
          </Button>
        </Section>
        <Text style={paragraph}>
          We look forward to reviewing your application and welcoming you to the
          getfunds team!
        </Text>
        <Text style={paragraph}>
          Kindest Regards
          <br />
          The getfunds team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          getfunds business address, Newredruth Alberton
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "teal",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
