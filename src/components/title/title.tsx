import { ReactElement } from "react";

import { Title as BaseTitle } from "~/components/title/title.styles";
import { TitleProps } from "~/components/title/types";

export const Title = ({ text }: TitleProps): ReactElement => <BaseTitle>{text}</BaseTitle>;
