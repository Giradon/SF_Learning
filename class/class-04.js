/** Getter / Setter */

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new User('9Diin', 'Park');
console.log(user1);

user1.firstName = 'Neo';
console.log(user1);

/** fullName은 수정되지 않은 걸 확인할 수 있는데
 * 생성자 함수로 해당 클래스를 호출할 때, 최초로만 만들어지고, 그 다음부터는 firstName과 lastName이 바뀌더라도 전혀 변화가 없는 상태가 된다.
 * 이러한 부분을 보완하기 위해서 메서드를 활용한다.
 */

console.log(user1.getFullName()); // Neo Park

/** 함수를 호출하는 것을 좀 더 편리하게 쓰기 위해서 Getter라는 개념을 도입한다.
 * Getter는 값을 조회하는 용도의 메서드
 */

class NewUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        /** 함수이므로 다양한 로직이 추가될 수 있다. */
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        /** fullName이라는 속성에다가 값을 지정할 때 동작하는 메서드 */
        console.log(value);
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];

        console.log(value.split(' ')); // ['Neo', 'Kim']
        [this.firstName, this.lastName] = value.split(' ');
    }
}

const user2 = new NewUser('9Diin', 'Park');
console.log(user2.fullName);

user2.lastName = 'kim';
console.log(user2.fullName);

/** set이라는 키워드를 통해서 만든 fullName이라는 메서드는
 * 해당하는 fullName에다가 이렇게 할당 연산자를 통해서 어떤 값을 지정하려고 할 때 동작하는 메서드이다.
 */

user2.fullName = 'Neo Kim';
