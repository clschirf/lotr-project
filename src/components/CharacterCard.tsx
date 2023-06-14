import styled from '@emotion/styled';
import Badge from 'library/Badge';
import SvgIcon from 'library/SvgIcon';
import EXTERNAL_LINK from 'assets/external-link.svg';
import FEMALE from 'assets/venus.svg';
import MALE from 'assets/mars.svg';
import { getRaceStyling } from 'utils/characterUtils';
import { subheadingColor } from 'library/palette';
import CharacterType from 'types/character';

export type CharacterCardProps = {
  character: CharacterType;
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.color};
  padding: 2em;
  border-radius: 15px;
  width: 10em;
  position: relative;
  height: 25em;
`;

const Earmark = styled.div`
  width: 0;
  height: 0;
  border-right: 90px solid ${props => props.color};
  border-bottom: 90px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 14px;
`;

const NameContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

const RaceIconContainer = styled.div`
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  width: 100%;
  margin: 0.25em 0;
`;

const Subheading = styled.div`
  color: ${subheadingColor};
  font-weight: 300;
  text-align: right;
  margin-right: 0.5em;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1em;

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }
`;

const CharacterCard = (props: CharacterCardProps) => {
  const { characterName, race, gender, birth, death, wikiUrl } =
    props.character;
  const { icon: RACE_ICON, color: raceColor } = getRaceStyling(race);

  return (
    <CardContainer color={raceColor}>
      <Earmark color={raceColor} />
      <div>
        <RaceIconContainer>
          <SvgIcon svgRef={RACE_ICON} size="6em" />
        </RaceIconContainer>
        <NameContainer>
          <h1>{characterName}</h1>
        </NameContainer>
      </div>
      {!!gender && (
        <Badge
          text={gender}
          icon={gender.toLowerCase() === 'male' ? MALE : FEMALE}
        />
      )}

      {!!birth && (
        <DatesContainer>
          <Subheading>born</Subheading>
          {birth}
        </DatesContainer>
      )}
      {!!death && (
        <DatesContainer>
          <Subheading>died</Subheading>
          {death}
        </DatesContainer>
      )}

      {!!wikiUrl && (
        <LinkContainer>
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
          <SvgIcon svgRef={EXTERNAL_LINK} size="1.5em" />
        </LinkContainer>
      )}
    </CardContainer>
  );
};

CharacterCard.displayName = 'CharacterCard';
export default CharacterCard;
