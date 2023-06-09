import styled from '@emotion/styled';
import CharacterType from 'types/character';

export type CharacterCardProps = {
  character: CharacterType;
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2em;
  border-radius: 15px;
  width: 10em;
`;

const NameContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <CardContainer>
      <NameContainer>
        <h1>{props.character.characterName}</h1>
      </NameContainer>
      <div>{props.character.race}</div>
      <div>{props.character.gender}</div>

      {!!props.character.wikiUrl && (
        <div>
          <a
            href={props.character.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
      )}
    </CardContainer>
  );
};

CharacterCard.displayName = 'CharacterCard';
export default CharacterCard;
