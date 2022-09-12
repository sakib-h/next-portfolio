import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:+8801303-909469">
						+8801303-909469
					</LinkItem>
				</LinkColumn>

				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:sakib100.sa@gmail.com">
						sakib100.sa@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>

			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time </Slogan>
				</CompanyContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
