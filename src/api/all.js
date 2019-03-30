import request from '@/utils/request';

// 网页获取水果列表
export function getFruitsList(limit, page) {
    return request({
        url: '/product/list',
        method: 'get',
        params: {
            limit,
            page,
        },
    });
}
// 水果插入
export function insertFruits({
    name, type, price, image, introduction,
}) {
    return request({
        url: '/product/insert',
        method: 'post',
        data: {
            name,
            type,
            price,
            image,
            introduction,
        },
    });
}
// 删除水果
export function deleteFruits(pkId) {
    return request({
        url: '/product/delete', // ?pkId=1
        method: 'delete',
        params: {
            pkId,
        },
    });
}
// 更新水果图片
export function updateFruitsImage(pkId, image) {
    return request({
        url: '/product/updateImage',
        method: 'post',
        data: {
            pkId,
            image,
        },
    });
}
// 更新水果信息
export function updateFruitsInfo(pkId, name, type, price, image, introduction) {
    return request({
        url: '/product/update',
        method: 'post',
        data: {
            pkId,
            name,
            type,
            price,
            image,
            introduction,
        },
    });
}
// 获取用户列表
export function getUserList() {
    return request({
        url: '/user/list',
        method: 'get',
    });
}
// 获取订单列表
export function getOrderList() {
    return request({
        url: '/order/list',
        method: 'get',
    });
}
// 更新订单状态
export function updateOrderStatus(orderId, status) {
    return request({
        url: 'order/update',
        method: 'post',
        data: {
            orderId,
            status,
        },
    });
}
// 删除订单
export function deleteOrder(orderId) {
    return request({
        url: '/order/delete', // orderId=201903160001
        method: 'delete',
        params: {
            orderId,
        },
    });
}
