import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				My purpose is to help you build an awesome and perfect website
			</SectionText>
			<Button onClick={()=>{window.location = "https://github.com/sakib-h";}}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
