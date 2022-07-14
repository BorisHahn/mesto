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

  setUserInfo(name, description) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}

export default UserInfo;
