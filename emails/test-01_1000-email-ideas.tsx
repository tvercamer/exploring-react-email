// Trying to rebuild this email: https://reallygoodemails.com/emails/over-750-email-ideas-hot-off-the-press

import * as React from "react";

import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Preview } from "@react-email/preview";

import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";

import { Button } from "@react-email/button";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";

const styles = {
  global: {
    fontFamily: "Arial, Georgia, Helvetica, sans-serif",
    fontSize: "16px",
    lineHeight: "1.3",
    backgroundColor: "#F2F4F6",
  },
  logo: {
    padding: "20px 30px",
  },
  section: (background = "#FFFFFF", hasBottomPadding = true) => ({
    backgroundColor: background,
    padding: hasBottomPadding ? "30px" : "30px 30px 0 30px",
    title: {
      textAlign: "center",
      margin: "0 0 32px 0",
    },
  }),
};

export default function Email() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Preview>We're lovin' it. Are you?</Preview>
      </Head>

      <Body style={styles.global}>
        {/* ---------- View in browser ---------- */}
        <Container>
          <Section>
            <Link href="#">
              <Text style={{ textAlign: "right", color: "black" }}>
                View in browser
              </Text>
            </Link>
          </Section>
        </Container>

        {/* ---------- Actual email ---------- */}
        <Container style={{ backgroundColor: "#FFFFFF" }}>
          {/* ---------- Header: Logo + Hr ---------- */}
          <Section style={styles.logo}>
            <Link href="https://1000emailideas.com/">
              <Img
                alt="1000 email ideas"
                src="https://storage.mlcdn.com/account_image/131667/lypCwjJm6cMwUz42ChB8fG9wBPu3KSNWeplRyKeq.png"
                width="150px"
              />
            </Link>
          </Section>
          <Hr />

          {/* ---------- Content: Welcome to the idea party ---------- */}
          <Section style={styles.section()}>
            <Heading as="h2" style={styles.section().title}>
              Welcome to the idea party
            </Heading>
            <p>Hey there,</p>
            <p>
              Welcome to the party. Every month you'll receive a list of email
              marketing idea starters that will inspire your own winning ideas.
            </p>
            <p>That's it. It's that simple.</p>
            <p>
              Click below to access your first 750+ idea starters. Our only
              request is that you take these ideas, make them your own and
              ensure the email marketing Lite shines bright.
            </p>

            <Section style={{ textAlign: "center", marginTop: "32px" }}>
              <Button
                href="https://1000emailideas.com/"
                style={{
                  backgroundColor: "#08c269",
                  color: "#FFFFFF",
                  padding: "12px 32px",
                  borderRadius: "25px",
                }}
              >
                Download your email ideas
              </Button>
            </Section>
          </Section>

          {/* ---------- Content: Here's what you missed ---------- */}
          <Section style={styles.section("#d6f2e2", false)}>
            <Heading as="h2" style={styles.section().title}>
              Here's what you missed
            </Heading>
            <p>
              Don't worry about being late to the party. A little tardiness
              never hurt anybody.
            </p>
            <p>
              Marilyn Monroe once said:{" "}
              <i>
                "Being late means making sure that you are irreplaceble, that
                everyone else is waiting for your."
              </i>
            </p>
            <p>
              So take off your coat while we reheat the hors d'oeuvres and click
              the thumbnails below to read the latest issues of 1000 Email
              Ideas.
            </p>
          </Section>

          <Section style={styles.section("#d6f2e2")}>
            <Column>
              <Link href="https://1000emailideas.com/">
                <Img
                  alt="Thumbnail 1"
                  src="https://cdn-icons-png.flaticon.com/512/4598/4598380.png"
                  width="150px"
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://1000emailideas.com/">
                <Img
                  alt="Thumbnail 2"
                  src="https://cdn-icons-png.flaticon.com/512/4598/4598489.png"
                  width="150px"
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://1000emailideas.com/">
                <Img
                  alt="Thumbnail 3"
                  src="https://cdn-icons-png.flaticon.com/512/4598/4598187.png"
                  width="150px"
                />
              </Link>
            </Column>
          </Section>

          {/* ---------- Last message + Hr ---------- */}
          <Section style={styles.section()}>
            <Heading as="h2" style={{ textAlign: "center" }}>
              Erin & Jonas
            </Heading>
            <Text>
              P.S. For weekly updates or to start a converstation with us,
              connect on{" "}
              <Link
                href="https://linkedin.com"
                style={{ textDecoration: "underline", color: "black" }}
              >
                LinkedIn
              </Link>{" "}
              or{" "}
              <Link
                href="https://twitter.com"
                style={{ textDecoration: "underline", color: "black" }}
              >
                Twitter
              </Link>
              !
            </Text>
          </Section>
          <Hr />

          {/* ---------- Footer ---------- */}
          <Section style={styles.section("white", false)}>
            {/* ---------- Footer: Logo ---------- */}
            <Row>
              <Column style={{ textAlign: "center" }}>
                <Link href="https://1000emailideas.com/">
                  <Img
                    src="https://storage.mlcdn.com/account_image/131667/q4IW8JhBPMk2QI6vWK9AjpyEkbkhXp3XLBFWcaVK.png"
                    alt="1000 Email Ideas"
                    height="100px"
                    width="100px"
                    style={{ display: "inline-block" }}
                  />
                </Link>
              </Column>
            </Row>

            {/* ---------- Footer: Social Media ---------- */}
            <Row>
              <Column>
                <Link
                  href="https://www.facebook.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "black",
                  }}
                >
                  <Img
                    src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
                    alt="Facebook"
                    width="20px"
                    height="20px"
                  />
                  <Text>SHARE TO FACEBOOK</Text>
                </Link>
              </Column>
              <Column>
                <Link
                  href="https://www.twitter.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "black",
                  }}
                >
                  <Img
                    src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png"
                    alt="Twitter"
                    width="20px"
                    height="20px"
                  />
                  <Text>SHARE TO TWITTER</Text>
                </Link>
              </Column>
              <Column>
                <Link
                  href="https://www.twitter.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "black",
                  }}
                >
                  <Img
                    src="https://cdn-icons-png.flaticon.com/512/318/318476.png"
                    alt="Arrow right"
                    width="20px"
                    height="20px"
                  />
                  <Text>FORWARD EMAIL</Text>
                </Link>
              </Column>
            </Row>

            {/* ---------- Footer: Address ---------- */}
            <Row>
              <Text style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>1000 Email Ideas</span>
                <br />
                548 Market St, San Francisco, CA
              </Text>
            </Row>

            {/* ---------- Footer: Legal ---------- */}
            <Row>
              <Text style={{ textAlign: "center" }}>
                You received this email because you subscribed.
              </Text>
              <Text style={{ textAlign: "center" }}>
                <Link
                  href="#"
                  style={{ textDecoration: "underline", color: "black" }}
                >
                  Unsubscribe
                </Link>
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
