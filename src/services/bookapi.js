import request from '@/utils/request';
export async function getbook() {
    return request(`http://123.206.55.50:15000/shop/list`);
}