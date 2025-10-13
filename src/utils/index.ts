/**
 * 睡眠指定时间
 * @param delay 睡眠时间，单位毫秒
 * @returns 一个Promise对象，在指定时间后resolve
 */
export function sleep(delay: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}