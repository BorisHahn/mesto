class UserInfo {
  constructor(userInfo) {
    this._profileName = document.querySelector(userInfo.nameSelector);
    this._profileDescription = document.querySelector(userInfo.descriptionSelector);
    this._profileId = null;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
      profileId: this._profileId
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.description;
    this._profileId = data.profileId;
  }
}

export default UserInfo;
