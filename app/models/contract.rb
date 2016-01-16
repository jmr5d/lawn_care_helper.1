class Contract < ActiveRecord::Base
  belongs_to :user
  belongs_to :property
  has_many :contract_services
  has_many :invoices
end
