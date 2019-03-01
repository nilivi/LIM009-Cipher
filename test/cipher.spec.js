describe("cipher",()=> {
  it("cipher debería ser un objeto",()=>{
    assert.equal(typeof cipher,"object");
  });
  describe("cipher.suma", ()=>{
    it("cipher.suma debería ser un función",()=>{
      assert.equal(typeof cipher.suma, "function");
    })
    it("cipher.suma debe sumar 2 numeros para ello cuando a=3, b=5,debe retornar 8",() =>{
      assert.equal(cipher.suma(3,5), 8);
    })
    it("cipher.suma debería ser un numero para ello a=number, b=number", ()=>{
      assert.equal(typeof cipher.suma(1,2), "number");
    })
  })
});