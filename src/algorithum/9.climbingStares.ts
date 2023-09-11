function climbingStaiers(params:number): number {
    if(params == 1 || params == 0) {
        return params
    }

    return climbingStaiers(params-1) + climbingStaiers(params-2);
}

console.log(climbingStaiers(8));