import styled from "styled-components";

export const BubbleSlideWrapper = styled.div`
  width: 30px;
  height: 20px;

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

#loader-4 span{
  width: 20%;
  height: 30%;
  border-radius: 100%;
  background-color: #e6e6e6;
  margin: 35% 5%;
  opacity: 0;
}

#loader-4 span:nth-child(1){
  animation: opacitychange 1s ease-in-out infinite;
}

#loader-4 span:nth-child(2){
  animation: opacitychange 1s ease-in-out 0.33s infinite;
}

#loader-4 span:nth-child(3){
  animation: opacitychange 1s ease-in-out 0.66s infinite;
}

@keyframes opacitychange{
  0%, 100%{
    opacity: 0;
  }

  60%{
    opacity: 1;
  }
}
`;

export const BubbleBounceWrapper = styled.div`
  width: 100px;
  height: 100px;

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #loader-2 span{
  width: 20%;
  height: 20%;
  border-radius: 100%;
  background-color: #3498db;
  margin: 0px 5px;
}

#loader-2 span:nth-child(1){
  animation: bounce 1s ease-in-out infinite;
}

#loader-2 span:nth-child(2){
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader-2 span:nth-child(3){
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce{
  0%, 75%, 100%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20%);
    -ms-transform: translateY(-20%);
    -o-transform: translateY(-20%);
    transform: translateY(-20%);
  }
}

`;

