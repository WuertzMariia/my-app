

export const requestUsers = (state) => {
    return state.usersPage
}

export const usersPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const totUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const requestPage = (state) => {
    return state.usersPage.currentPage;
}

export const pageLoading = (state) => {
    return state.usersPage.isLoading;
}

export const subscriptionConfirm = (state) => {
    return state.usersPage.subscriptionProcessed;
}