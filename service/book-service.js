var appInstance = getApp();

function getBooks(name, type, pageIndex, pageSize, callBack) {
  var url = appInstance.globalData.baseUrl + '/api/services/app/Book/GetAll?';
  url = url + (name ? 'Name=' + name + '&' : '');
  url = url + (type ? 'Type=' + type + '&' : '');
  url = url + 'SkipCount=' + (pageIndex - 1) + '&';
  url = url + 'MaxResultCount=' + pageSize;

  wx.request({
    url: url,
    method: 'Get',
    success: res => {
      return typeof callBack == "function" && callBack(res.data.result);
    }
  });
}

function getBook(id, callBack) {
  var url = appInstance.globalData.baseUrl + '/api/services/app/Book/Get?' + id;

  wx.request({
    url: url,
    method: 'Get',
    success: res => {
      return typeof callBack == "function" && callBack(res.data.result);
    }
  });
}

function createBook(data, callBack) {
  wx.request({
    url: appInstance.globalData.baseUrl + '/api/services/app/Book/Create',
    method: 'POST',
    data: data,
    success: res => {
      return typeof callBack == "function" && callBack(res.data.result);
    }
  });
}

module.exports = {
  getBooks: getBooks,
  getBook: getBook,
  createBook: createBook
}