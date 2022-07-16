class UserInfo {
  constructor(userInfo) {
    this._profileName = document.querySelector(userInfo.nameSelector);
    this._profileDescription = document.querySelector(userInfo.descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.description;
  }
}

export default UserInfo;
