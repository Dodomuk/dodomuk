import React, { Component } from 'react';
class MainView extends Component{
    render(){
        return(
            <a>
            react를 사용하지 않아도, html과 css, javascript를 이용해서 웹 페이지를 만들 수 있지만, react를 이용해 사용자와 상호작용할 수 있는 동적인 UI를 쉽게 만들 수 있기 때문에 많이 이용되는 것 같습니다..!

            React의 특징
            React의 특징은 크게 다음과 같이 구분해보았습니다.
            1. Data Flow
            2. Component 기반 구조
            3. Virtual Dom
            4. Props and State
            5. JSX
            
            1. Data Flow
            React는 데이터의 흐름이 한 방향으로만 흐르는 단방향 데이터 흐름을 가집니다.
            
            Augular.js와 같은 양방향 데이터 바인딩은 규모가 커질수록(대규모 애플리케이션의 경우) 데이터의 흐름을 추적하기가 힘들고 복잡해지는 경향이 있어, 복잡한 앱에서도 데이터 흐름에서 일어나는 변화를 보다 예측 가능할 수 있도록 단방향 흐름을 가지도록 했다고 합니다.
            
            2. Component 기반 구조
            Component는 독립적인 단위의 소프트웨어 모듈을 말합니다.
            즉, 소프트웨어를 독립적인 하나의 부품으로 만드는 방법이라고 볼 수 있습니다.
            
            React는 UI(View)를 여러 컴포넌트(component)를 쪼개서 만듭니다.
            한 페이지 내에서도 여러 각 부분을 독립된 컴포넌트로 만들고, 이 컴포넌트를 조립해 화면을 구성합니다.
            
            컴포넌트 단위로 쪼개져 있기 때문에, 전체 코드를 파악하기가 상대적으로 쉽습니다. 이렇게 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문에 재사용성이 높습니다. 따라서 코드는 반복해 입력할 필요 없이, 컴포넌트만 import해 사용하면 된다는 간편함이 있으며, 애플리케이션이 복잡해지더라도 코드의 유지보수, 관리가 용이해지는 장점을 가집니다.
            </a>
        );
    }
}
export default MainView;