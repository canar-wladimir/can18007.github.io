   public void testBuyLand5() {
        System.out.println("buyLand");
        int landPrice = 50;
        int acresToBuy = 0;
        CropData cropData = new CropData();
        cropData.setAcresOwned(600);
        cropData.setWheatInStore(600);
        int expResult = 600;
        try {
            CropControl.buyLand(landPrice, acresToBuy, cropData);
            assertEquals(expResult, cropData.getAcresOwned());
        } catch (Exception e){
            fail("Unexpected exception: + e.getMessage()");
        }
    }