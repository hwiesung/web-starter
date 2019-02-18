import { observable,  action } from 'mobx'

class AppStore {
    @observable user = null;

    init(uid){
        this.uid = uid;
        this.user = null;
        this.loadData()
    }

    @action
    loadData () {
        this.loadUserInfo();
    }

    @action
    loadUserInfo(){

    }

    @action.bound
    onLoadUserInfoComplete(snapshot) {

    }
}

const appStore = new AppStore();

export default appStore;

