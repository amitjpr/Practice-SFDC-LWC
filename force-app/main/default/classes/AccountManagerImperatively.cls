public with sharing class AccountManagerImperatively {
    @AuraEnabled
    public static List<Account> getName(Integer accLimit){
        
        return [SELECT Id, Name, Phone, Website FROM Account Limit :accLimit];
    }
}

