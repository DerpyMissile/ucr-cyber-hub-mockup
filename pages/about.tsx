import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="Official university websites are often weird and hard to navigate. This one doesn't have to be!"
      >
        <Prose>
          <p>
            This website is created to serve as a central hub consisting of
            UCR's cybersecurity resources, ranging from professors and classes
            to publications and resources that are not often talked about; this
            is a hub meant to inform the public about the different resources
            and research that have come out of UCR.
          </p>
          <p>
            We (Haocheng and Emmanual, the creators of the website) initially
            started this website after figuring out that it was hard for us to
            find resources online on the official UCR website in regards to
            official publications on its research on cybersecurity as well as
            professors in regards to PHD students.
          </p>
          <p>
            We believe that this type of information should be shared and that
            the knowledge of both the results of the research curated by UCR as
            well as its boundless helpful resources should't be buried under the
            excess of fluff that the official UCR website has under
            cybersecurity. Therefore, we created this website to serve as a
            "hub" for students and researchers alike to find resources that
            would serve to help them in whatever they want to find in terms of
            cybersecurity here at UCR.
          </p>
          <p>
            If you find that it is out-of-date, create a pull-request, file an
            issue, or email the current maintainer (derpymissile or xinan1441 on
            Discord)
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
