class user {
    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.createdDate = new Date();
        this.actived = true;
    }

    static getUsers() {
        let listUser = [];
    
        let mUser = new user();
        mUser.id=1;
        mUser.name= 'ana';
        mUser.email= 'anan@gmail.com';
        listUser.push(mUser);
    
        mUser = new user();
        mUser.id=2;
        mUser.name= 'pepe';
        mUser.email= 'pepe@gmail.com';
        listUser.push(mUser);
    
        mUser = new user();
        mUser.id=3;
        mUser.name= 'mario';
        mUser.email= 'mario@gmail.com';
        listUser.push(mUser);
    
        return listUser;
    }
}




